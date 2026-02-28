import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LayoutGrid,
  Lock,
  Mail,
  Smartphone,
} from "lucide-react-native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = () => {
    router.replace("/(tabs)");
  };

  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />

      {/* Background Gradient */}
      <LinearGradient
        colors={["#1a1a2e", "#16213e", "#0f0f1a", "#000000"]}
        locations={[0, 0.3, 0.6, 1]}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center px-6"
      >
        {/* Logo Section */}
        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="items-center mb-10"
        >
          <View className="w-20 h-20 bg-white/10 rounded-3xl items-center justify-center mb-6 border border-white/20 shadow-lg shadow-purple-500/20">
            <LayoutGrid size={40} color="#ffffff" strokeWidth={1.5} />
          </View>

          <Text className="text-white text-4xl font-black tracking-tighter">
            TicketCat
          </Text>
          <Text className="text-zinc-400 text-base mt-2 font-medium">
            {isLogin ? "Welcome back, explorer!" : "Join the adventure"}
          </Text>
        </Animated.View>

        {/* Form Fields */}
        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          className="gap-y-4"
        >
          {/* Email */}
          <View className="bg-white/5 border border-white/10 rounded-2xl px-4 h-14 flex-row items-center">
            <Mail size={20} color="#9ca3af" />
            <TextInput
              className="flex-1 ml-3 text-white text-base font-medium"
              placeholder="Email Address"
              placeholderTextColor="#52525b"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Phone (Sign Up only) */}
          {!isLogin && (
            <Animated.View entering={FadeInUp.duration(400)}>
              <View className="bg-white/5 border border-white/10 rounded-2xl px-4 h-14 flex-row items-center">
                <Smartphone size={20} color="#9ca3af" />
                <TextInput
                  className="flex-1 ml-3 text-white text-base font-medium"
                  placeholder="Phone Number"
                  placeholderTextColor="#52525b"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={setPhone}
                />
              </View>
            </Animated.View>
          )}

          {/* Password */}
          <View className="bg-white/5 border border-white/10 rounded-2xl px-4 h-14 flex-row items-center">
            <Lock size={20} color="#9ca3af" />
            <TextInput
              className="flex-1 ml-3 text-white text-base font-medium"
              placeholder="Password"
              placeholderTextColor="#52525b"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <View className="p-2">
                {showPassword ? (
                  <EyeOff size={20} color="#9ca3af" />
                ) : (
                  <Eye size={20} color="#9ca3af" />
                )}
              </View>
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          {isLogin && (
            <TouchableOpacity className="self-end pt-1">
              <Text className="text-zinc-400 text-xs font-bold tracking-widest">
                FORGOT PASSWORD?
              </Text>
            </TouchableOpacity>
          )}

          {/* Main Action Button */}
          <TouchableOpacity
            onPress={handleAuth}
            activeOpacity={0.8}
            className="bg-white h-14 rounded-2xl items-center justify-center flex-row mt-4 shadow-lg shadow-white/10"
          >
            <Text className="text-black text-base font-extrabold mr-2">
              {isLogin ? "Sign In" : "Create Account"}
            </Text>
            <ArrowRight size={20} color="#000" strokeWidth={2.5} />
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center my-6">
            <View className="flex-1 h-[1px] bg-white/10" />
            <Text className="text-zinc-500 mx-4 text-xs font-bold">
              OR CONTINUE WITH
            </Text>
            <View className="flex-1 h-[1px] bg-white/10" />
          </View>

          {/* Social Buttons */}
          <View className="flex-row gap-4">
            <TouchableOpacity
              className="flex-1 h-12 bg-white/5 border border-white/10 rounded-xl items-center justify-center flex-row active:bg-white/10"
              activeOpacity={0.7}
            >
              <Ionicons name="logo-google" size={20} color="white" />
              <Text className="text-white font-semibold ml-2">Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 h-12 bg-white/5 border border-white/10 rounded-xl items-center justify-center flex-row active:bg-white/10"
              activeOpacity={0.7}
            >
              <Ionicons name="logo-apple" size={20} color="white" />
              <Text className="text-white font-semibold ml-2">Apple</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Toggle Login/Signup */}
        <Animated.View
          entering={FadeInDown.delay(600).duration(1000).springify()}
          className="flex-row justify-center mt-10"
        >
          <Text className="text-zinc-500 text-sm">
            {isLogin ? "New to TicketCat? " : "Already have an account? "}
          </Text>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text className="text-white text-sm font-bold underline">
              {isLogin ? "Sign Up" : "Sign In"}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </View>
  );
}
