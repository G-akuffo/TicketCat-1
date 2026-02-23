import { TicketTier } from "@/src/types/event";
import { BlurView } from "expo-blur";
import * as Haptics from "expo-haptics";
import { Minus, Plus, X } from "lucide-react-native";
import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface TicketSelectionModalProps {
  visible: boolean;
  onClose: () => void;
  ticketTiers: TicketTier[];
  onBuy: (tier: TicketTier, quantity: number) => void;
}

export default function TicketSelectionModal({
  visible,
  onClose,
  ticketTiers,
  onBuy,
}: TicketSelectionModalProps) {
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleSelectTier = (id: string) => {
    if (selectedTierId === id) return;
    setSelectedTierId(id);
    setQuantity(1);
  };

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, 10)); // Max 10 tickets
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const selectedTier = ticketTiers.find((t) => t.id === selectedTierId);

  const handleBuy = () => {
    if (selectedTier) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      onBuy(selectedTier, quantity);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end">
        {/* Backdrop - Tap to close */}
        <TouchableWithoutFeedback onPress={onClose}>
          <View className="absolute inset-0 bg-black/60" />
        </TouchableWithoutFeedback>

        {/* Modal Content */}
        <BlurView
          intensity={80}
          tint="dark"
          className="bg-surface-raised rounded-t-[32px] overflow-hidden border-t border-border-subtle"
        >
          <View className="p-6 pb-10 bg-surface-raised/90">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-txt-main text-xl font-bold">
                Select Ticket
              </Text>
              <TouchableOpacity
                onPress={onClose}
                className="w-8 h-8 rounded-full bg-surface-elevated items-center justify-center border border-border-subtle"
              >
                <X size={16} color="#a1a1aa" />
              </TouchableOpacity>
            </View>

            {/* Tiers List */}
            <ScrollView
              className="max-h-[400px]"
              showsVerticalScrollIndicator={false}
            >
              <View className="gap-4">
                {ticketTiers.map((tier) => {
                  const isSelected = selectedTierId === tier.id;
                  return (
                    <TouchableOpacity
                      key={tier.id}
                      onPress={() => handleSelectTier(tier.id)}
                      activeOpacity={0.8}
                      className={`p-4 rounded-2xl border ${
                        isSelected
                          ? "bg-surface-elevated border-white"
                          : "bg-surface-raised border-border-subtle"
                      }`}
                    >
                      <View className="flex-row justify-between items-start mb-2">
                        <View className="flex-1 mr-4">
                          <Text
                            className={`text-base font-bold mb-1 ${
                              isSelected ? "text-white" : "text-txt-main"
                            }`}
                          >
                            {tier.name}
                          </Text>
                          <Text className="text-zinc-400 text-xs leading-5">
                            {tier.description}
                          </Text>
                        </View>
                        <Text className="text-txt-main text-base font-bold">
                          {tier.price}
                        </Text>
                      </View>

                      {/* Quantity Selector (Only visible when selected) */}
                      {isSelected && (
                        <View className="flex-row justify-between items-center mt-4 pt-4 border-t border-border-subtle">
                          <Text className="text-txt-main font-medium">
                            Quantity
                          </Text>
                          <View className="flex-row items-center gap-4 bg-surface-raised rounded-xl p-1 border border-border-subtle">
                            <TouchableOpacity
                              onPress={handleDecrement}
                              className="w-8 h-8 rounded-lg bg-surface-elevated items-center justify-center"
                            >
                              <Minus size={16} color="#fff" />
                            </TouchableOpacity>
                            <Text className="text-txt-main font-bold w-4 text-center">
                              {quantity}
                            </Text>
                            <TouchableOpacity
                              onPress={handleIncrement}
                              className="w-8 h-8 rounded-lg bg-white items-center justify-center"
                            >
                              <Plus size={16} color="#000" />
                            </TouchableOpacity>
                          </View>
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>

            {/* Buy Button */}
            <View className="mt-6 pt-4 border-t border-border-subtle">
              <TouchableOpacity
                onPress={handleBuy}
                disabled={!selectedTier}
                className={`h-14 rounded-2xl items-center justify-center flex-row gap-2 ${
                  selectedTier ? "bg-white" : "bg-surface-elevated opacity-50"
                }`}
              >
                <Text
                  className={`text-lg font-bold ${
                    selectedTier ? "text-black" : "text-zinc-500"
                  }`}
                >
                  {selectedTier
                    ? `Pay ${
                        // Simple parsing assuming $ price. In real app use proper currency util
                        "$" +
                        (
                          parseFloat(
                            selectedTier.price.replace(/[^0-9.]/g, ""),
                          ) * quantity
                        )
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }`
                    : "Select a Ticket"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
}
