// components/ComplaintReceiptPDF.jsx
import React from "react";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    color: "#0A1F44",
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 12,
    color: "#4F4F4F",
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
    color: "#555",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  status: {
    color: "green",
    fontWeight: "bold",
  },
  image: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginBottom: 10,
  },
});

const ComplaintReceiptPDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        {/* Add tick icon (use base64 or online image link if needed) */}
        <Image
          style={styles.image}
          src="/mnt/data/c8fa4624-addc-45a1-a1a0-ef5ad4f2d9b4.png"
        />

        <Text style={styles.title}>Complaint Submitted Successfully!</Text>
        <Text style={styles.message}>
          Thank you for reporting the environmental issue. Your complaint has
          been registered and will be addressed by our team.
        </Text>

        <Text style={styles.label}>Complaint ID</Text>
        <Text style={styles.value}>{data.specialID}</Text>

        <Text style={styles.label}>Submission Date</Text>
        <Text style={styles.value}>{data.createdAt}</Text>

        <Text style={styles.label}>Complaint Category</Text>
        <Text style={styles.value}>{data.category}</Text>

        <Text style={styles.label}>Sub Category</Text>
        <Text style={styles.value}>{data.subCategory}</Text>

        <Text style={styles.label}>Status</Text>
        <Text style={[styles.value, styles.status]}>{data.status}</Text>
      </View>
    </Page>
  </Document>
);

export default ComplaintReceiptPDF;
