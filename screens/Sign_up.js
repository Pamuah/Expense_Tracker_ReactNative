import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useState } from "react";
import axios from "axios";
import CustomTextField from "../Custom Widget/textfield";
import CustomButton from "../Custom Widget/CustomButton";
import Toast from "react-native-toast-message";
//import DateTimePicker from "@react-native-community/datetimepicker";

const API_URL = "http://10.10.11.41:3008/api/v1/users/signup/buyer";

export default function SignUpScreen({ navigation }) {
  const [firstname, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [dob, setDob] = useState(""); // Stores formatted date as string
  const [date, setDate] = useState(new Date()); // Stores Date object
  const [showPicker, setShowPicker] = useState(false); // Controls date picker visibility
  const [telephone, setTelephone] = useState("");
  const [country, setCountry] = useState("");

  const handleSignUp = async () => {
    if (!firstname || !surname || !email || !password || !verifyPassword) {
      Toast.show({
        type: "error", // Can be 'success', 'error', or 'info'
        text1: "Error!", // Title of the toast
        text2: "Please fill in all required fields", // Message content of the toast
        visibilityTime: 3000, // Duration the toast is visible (in milliseconds)
        position: "bottom", // You can change this to 'top', 'center', or 'bottom'
      });
      return false;
    }
    if (password !== verifyPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    const userData = {
      country,
      first_name: firstname,
      last_name: surname,
      email,
      date_of_birth: dob,
      telephone,
      password,
      confirm_password: verifyPassword,
    };
    console.log("User Data:", userData);

    try {
      const response = await axios.post(API_URL, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      Alert.alert("Success", "Account created successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      Alert.alert("Error", error.response?.data?.message || "Signup failed");
    }

    setCountry("");
    setFirstName("");
    setSurname("");
    setEmail("");
    setDob("");
    setTelephone("");
    setPassword("");
    setVerifyPassword("");
  };

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === "ios"); // Keep picker open for iOS, close for Android
    if (selectedDate) {
      setDate(selectedDate);
      setDob(selectedDate.toISOString().split("T")[0]); // Formats date as yyyy-mm-dd
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <Text style={styles.title}>Create An Account</Text>

      <Text style={styles.headertxt}>Country</Text>
      <CustomTextField
        label="e.g., Ghana"
        icon="globe"
        value={country}
        onChangeText={setCountry} // Correct prop name
      />

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.headertxt}>First Name</Text>
          <CustomTextField
            label="eg. John"
            value={firstname}
            onChangeText={setFirstName}
          />
        </View>
        <View style={[styles.inputContainer, { marginLeft: 12 }]}>
          <Text style={styles.headertxt}>Surname</Text>
          <CustomTextField
            label="eg. Doe"
            value={surname}
            onChangeText={setSurname}
          />
        </View>
      </View>

      {/* Date Picker Implementation */}
      <Text style={styles.headertxt}>D.O.B</Text>
      <View style={styles.dateContainer}>
        <TouchableOpacity
          onPress={() => setShowPicker(true)}
          style={styles.dateButton}
        >
          <Text style={styles.dateButtonText}>Select Date</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.dateInput}
          value={dob}
          placeholder="yyyy-mm-dd"
          editable={false} // Prevent manual input
        />
      </View>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.headertxt}>Email</Text>
          <CustomTextField
            label="eg. johndoe@example.com"
            icon="envelope"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={[styles.inputContainer, { marginLeft: 12 }]}>
          <Text style={styles.headertxt}>Telephone</Text>
          <CustomTextField
            label="eg. 0123456789"
            value={telephone}
            onChangeText={setTelephone}
          />
        </View>
      </View>

      <Text style={styles.headertxt}>Password</Text>
      <CustomTextField
        label=" ********"
        icon="lock"
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.headertxt}>Verify Password</Text>
      <CustomTextField
        label=" ********"
        icon="lock"
        value={verifyPassword}
        onChangeText={setVerifyPassword}
      />

      <CustomButton
        title="Sign Up"
        icon="arrow-right"
        onPress={() => {
          handleSignUp();
          navigation.navigate("Login");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F52BA",
    marginBottom: 20,
    marginTop: 40,
  },
  headertxt: {
    fontSize: 18,
    color: "gray",
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    flex: 1,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  dateButton: {
    backgroundColor: "#0F52BA",
    padding: 10,
    borderRadius: 5,
  },
  dateButtonText: {
    color: "white",
    fontSize: 16,
  },
  dateInput: {
    borderWidth: 1,
    padding: 10,
    marginLeft: 10,
    width: 150,
    borderRadius: 5,
    borderColor: "gray",
    backgroundColor: "#f5f5f5",
  },
});
