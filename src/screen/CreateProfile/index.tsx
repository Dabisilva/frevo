import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useRem } from "responsive-native";
import { styles } from "./styles";

export function CreateProfile() {
  const rem = useRem();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container}>
        <View
          style={[
            styles.container,
            {
              paddingHorizontal: rem(2, true),
              paddingVertical: rem(4, true),
            },
          ]}
        >
          <View
            style={[
              styles.content,
              {
                paddingVertical: rem(2, true),
                paddingHorizontal: rem(1, true),
              },
            ]}
          >
            <View
              style={[
                styles.photoContainer,
                {
                  marginBottom: rem(1, true),
                },
              ]}
            >
              <View
                style={[
                  styles.imageNull,
                  {
                    width: rem(5, true),
                    height: rem(5, true),
                    borderRadius: rem(4, true),
                  },
                ]}
              >
                <Image
                  style={{
                    width: rem(5, true),
                    height: rem(5, true),
                    borderRadius: rem(4, true),
                  }}
                  source={{}}
                />
              </View>
              <Text style={[styles.textPhoto, { fontSize: rem(0.8, true) }]}>
                Sua foto
              </Text>
            </View>

            <View
              style={[
                styles.body,
                {
                  padding: rem(0.5, true),
                },
              ]}
            >
              <View style={styles.inputContainer}>
                <Text style={styles.legend}>Nome Completo</Text>
                <TextInput style={styles.input} placeholder="Nome completo" />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.legend}>Data de nascimento</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Data de nascimento"
                />
              </View>

              <View style={styles.textAreaContainer}>
                <Text style={styles.legend}>Sua descrição</Text>
                <TextInput
                  style={styles.textArea}
                  multiline={true}
                  numberOfLines={10}
                />
              </View>

              <RectButton
                style={[
                  styles.button,
                  {
                    height: rem(3, true),
                  },
                ]}
              >
                <Text
                  style={[
                    styles.textButton,
                    {
                      fontSize: rem(1, true),
                    },
                  ]}
                >
                  Criar conta
                </Text>
              </RectButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
