function jsonValue() {
    KEY=$1
    awk -F"[,:}]" '{for(i=1;i<=NF;i++){if($i~/'$KEY'\042/){print $(i+1)}}}' | tr -d '"'
}

displayName=$(cat ../app.json | jsonValue displayName | awk '{ gsub (" ", "", $0); print}')
rnVersion=$(cat ../package.json | jsonValue react-native | awk '{ gsub (" ", "", $0); print}')

# set displayName to package.json
sed -i '.bak' '/"name":/ s/"name":[^,]*/"name":"'${displayName}'"/' ../package.json

# Recreate ios & android folder script
cd ..
rm -rf ios/ 
rm -rf android/
mkdir temp
cd temp
npx react-native init $displayName --version $rnVersion --template react-native-template-typescript
cd ..
mv "temp/${displayName}/ios" ./
mv "temp/${displayName}/android" ./
rm -rf temp/
cd ios/
pod install
cd ..

echo "==========Changed name completed!!==========\n${displayName} (React Native v.${rnVersion} w/ typescript)"