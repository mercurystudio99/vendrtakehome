import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

function TabBarIcon() {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} />;
}

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: () => <TabBarIcon name="code" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="buying"
        options={{
          title: 'Tab Two',
          tabBarIcon: () => <TabBarIcon name="code" />,
        }}
      />
      <Tabs.Screen
        name="selling"
        options={{
          title: 'Tab Three',
          tabBarIcon: () => <TabBarIcon name="code" />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Tab Four',
          tabBarIcon: () => <TabBarIcon name="code" />,
        }}
      />
    </Tabs>
  );
}
