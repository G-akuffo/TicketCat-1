import {
  ArrowDownLeft,
  ArrowUpRight,
  Landmark,
  Plus,
} from "lucide-react-native";
import React from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WalletScreen() {
  return (
    <View className="flex-1 bg-background">
      {/* --- STICKY HEADER --- */}
      <View className="flex-row items-center px-6 pt-[65px] pb-5 bg-background border-b border-border-elevated">
        <View className="flex-1">
          <Text className="text-txt-main text-[28px] font-black">Wallet</Text>
        </View>
        <TouchableOpacity className="w-[45px] h-[45px] rounded-[15px] bg-surface-raised justify-center items-center border border-surface-highlight">
          <Landmark size={18} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{ padding: 25, paddingTop: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View className="mb-8">
          <Text className="text-txt-muted text-base font-medium">
            Total Balance
          </Text>
          <Text className="text-txt-main text-[42px] font-bold mt-1">
            $1,240.50
          </Text>
        </View>

        {/* Quick Actions */}
        <View className="flex-row gap-4 mb-8">
          <Pressable className="flex-1 h-[60px] bg-surface-raised rounded-[16px] flex-row items-center justify-center gap-2 border border-border-subtle active:opacity-80">
            <View className="w-8 h-8 rounded-full bg-surface-highlight items-center justify-center">
              <Plus color="#fff" size={16} />
            </View>
            <Text className="text-txt-main font-bold text-sm">Top Up</Text>
          </Pressable>

          <Pressable className="flex-1 h-[60px] bg-surface-raised rounded-[16px] flex-row items-center justify-center gap-2 border border-border-subtle active:opacity-80">
            <View className="w-8 h-8 rounded-full bg-surface-highlight items-center justify-center">
              <ArrowUpRight color="#fff" size={16} />
            </View>
            <Text className="text-txt-main font-bold text-sm">Withdraw</Text>
          </Pressable>
        </View>

        {/* Recent Transactions List */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-txt-main text-lg font-bold">
            Recent Transactions
          </Text>
          <TouchableOpacity>
            <Text className="text-txt-subtle text-sm font-semibold">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View className="gap-3">
          {[
            {
              id: 1,
              title: "Music Festival 2026",
              date: "Today, 10:23 AM",
              price: "-$150.00",
              icon: ArrowUpRight,
              color: "#ff4d4d",
              bgColor: "rgba(255, 77, 77, 0.1)",
            },
            {
              id: 2,
              title: "Wallet Top Up",
              date: "Yesterday, 4:15 PM",
              price: "+$500.00",
              icon: ArrowDownLeft,
              color: "#4dff88",
              bgColor: "rgba(77, 255, 136, 0.1)",
            },
            {
              id: 3,
              title: "Art Gallery Entry",
              date: "Oct 24, 2026",
              price: "-$45.00",
              icon: ArrowUpRight,
              color: "#ff4d4d",
              bgColor: "rgba(255, 77, 77, 0.1)",
            },
            {
              id: 4,
              title: "Ticket Sale: Padel Rave",
              date: "Oct 20, 2026",
              price: "+$120.00",
              icon: ArrowDownLeft,
              color: "#4dff88",
              bgColor: "rgba(77, 255, 136, 0.1)",
            },
          ].map((item) => (
            <View
              key={item.id}
              className="flex-row justify-between items-center p-4 bg-surface-raised rounded-[20px] border border-border-subtle"
            >
              <View className="flex-row items-center gap-3">
                <View
                  className="w-10 h-10 rounded-full items-center justify-center"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <item.icon color={item.color} size={20} />
                </View>
                <View>
                  <Text className="text-txt-main text-sm font-bold mb-0.5">
                    {item.title}
                  </Text>
                  <Text className="text-txt-subtle text-xs font-medium">
                    {item.date}
                  </Text>
                </View>
              </View>
              <Text
                className="text-sm font-bold"
                style={{
                  color: item.price.startsWith("+") ? "#4dff88" : "#fff",
                }}
              >
                {item.price}
              </Text>
            </View>
          ))}
        </View>

        {/* Padding for the floating tab bar */}
        <View className="h-[100px]" />
      </ScrollView>
    </View>
  );
}
