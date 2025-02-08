import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Stack } from "expo-router";

import { HapticTab } from "../components/ HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
