import { ArrowDownLeft, ArrowUpRight } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const transactions = [
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
];

export const RecentTransactions = () => {
  return (
    <View>
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-txt-main text-lg font-bold">
          Recent Transactions
        </Text>
        <TouchableOpacity>
          <Text className="text-txt-subtle text-sm font-semibold">See All</Text>
        </TouchableOpacity>
      </View>

      <View className="gap-3">
        {transactions.map((item) => (
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
    </View>
  );
};
