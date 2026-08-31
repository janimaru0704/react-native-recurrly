import { Text, View } from "react-native";
import {Link} from "expo-router";

const Index = () => {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>
            <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4" >Go to Onboarding</Link>
        </View>
    );
};
export default Index;