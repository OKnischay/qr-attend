import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg'; // Import QR code generator

const Profile = () => {
  // Sample student data (This would be fetched from an API or stored locally)
  const studentData = {
    name: 'John Doe',
    registrationNumber: 'NCCSBCA061',
    department: 'Computer Science',
    year: '3rd Year',
  };

  // State for showing the QR code modal
  const [isModalVisible, setModalVisible] = useState(false);

  const handleGenerateQR = () => {
    // Here you can generate QR code based on any info (like registration number or other data)
    setModalVisible(true); // Show QR code modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.label}>Name: {studentData.name}</Text>
      <Text style={styles.label}>Registration No: {studentData.registrationNumber}</Text>
      <Text style={styles.label}>Department: {studentData.department}</Text>
      <Text style={styles.label}>Year: {studentData.year}</Text>

      <Button title="Generate QR Code for Attendance" onPress={handleGenerateQR} />

      {/* QR Code Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <QRCode
              value={studentData.registrationNumber} // QR code will hold the student's registration number
              size={200}
            />
            <Button
              title="Close"
              onPress={() => setModalVisible(false)} // Close modal when button is pressed
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
