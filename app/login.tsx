import { router } from "expo-router";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react-native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = () => {
    // In a real app, you would validate credentials here
    router.replace("/(tabs)");
  };

  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />
      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 justify-center px-6"
        >
          {/* Header */}
          <View className="items-center mb-12">
            <View className="w-16 h-16 bg-surface-highlight rounded-2xl items-center justify-center mb-4 border border-border-elevated">
              <Text className="text-3xl">🎫</Text>
            </View>
            <Text className="text-txt-main text-3xl font-black tracking-tighter">
              TicketCat
            </Text>
            <Text className="text-txt-muted text-base mt-2 font-medium">
              {isLogin ? "Welcome back!" : "Create your account"}
            </Text>
          </View>

          {/* Form */}
          <View className="gap-4">
            {/* Email Input */}
            <View className="flex-row items-center bg-surface-raised border border-border-elevated rounded-2xl px-4 h-14">
              <Mail size={20} color="#888" />
              <TextInput
                className="flex-1 ml-3 text-txt-main text-base font-medium"
                placeholder="Email Address"
                placeholderTextColor="#444"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Password Input */}
            <View className="flex-row items-center bg-surface-raised border border-border-elevated rounded-2xl px-4 h-14">
              <Lock size={20} color="#888" />
              <TextInput
                className="flex-1 ml-3 text-txt-main text-base font-medium"
                placeholder="Password"
                placeholderTextColor="#444"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={20} color="#888" />
                ) : (
                  <Eye size={20} color="#888" />
                )}
              </TouchableOpacity>
            </View>

            {/* Forgot Password (Login only) */}
            {isLogin && (
              <TouchableOpacity className="self-end">
                <Text className="text-txt-subtle text-sm font-semibold">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            )}

            {/* Main Action Button */}
            <TouchableOpacity
              className="bg-white h-14 rounded-2xl items-center justify-center flex-row mt-4 active:opacity-90"
              activeOpacity={0.8}
              onPress={handleAuth}
            >
              <Text className="text-black text-base font-bold mr-2">
                {isLogin ? "Sign In" : "Create Account"}
              </Text>
              <ArrowRight size={20} color="#000" strokeWidth={2.5} />
            </TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center my-6">
              <View className="flex-1 h-[1px] bg-border-subtle" />
              <Text className="text-txt-ghost mx-4 text-xs font-bold">OR</Text>
              <View className="flex-1 h-[1px] bg-border-subtle" />
            </View>

            {/* Social Buttons Placeholder */}
            <View className="flex-row gap-4">
              <TouchableOpacity
                className="flex-1 h-12 bg-surface-raised border border-border-elevated rounded-xl items-center justify-center flex-row"
                activeOpacity={0.7}
              >
                <View className="w-5 h-5 rounded-full bg-white items-center justify-center mr-2">
                  <Text className="text-[10px] font-bold text-black">G</Text>
                </View>
                <Text className="text-txt-main font-semibold">Google</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 h-12 bg-surface-raised border border-border-elevated rounded-xl items-center justify-center flex-row"
                activeOpacity={0.7}
              >
                <View className="w-5 h-5 rounded-full bg-white items-center justify-center mr-2">
                  <Text className="text-[10px] font-bold text-black"></Text>
                </View>
                <Text className="text-txt-main font-semibold">Apple</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Toggle Login/Signup */}
          <View className="flex-row justify-center mt-10">
            <Text className="text-txt-muted text-sm font-medium">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
            </Text>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text className="text-white text-sm font-bold underline">
                {isLogin ? "Sign Up" : "Sign In"}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
