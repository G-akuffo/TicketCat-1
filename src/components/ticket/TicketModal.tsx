import {
  Calendar,
  Clock,
  DoorOpen,
  MapPin,
  RefreshCcw,
  ShieldAlert,
  X,
} from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const TIERS = {
  GOLD: { main: "#D4AF37", accent: "#00FF88", label: "VVIP" },
  SILVER: {
    main: "#C0C0C0",
    accent: "#00A3FF",
    label: "VIP",
  },
  BRONZE: { main: "#CD7F32", accent: "#FF7F50", label: "PREMIUM" },
  GENERAL: { main: "#444444", accent: "#FFFFFF", label: "REGULAR" },
};

const TicketModal = ({ visible, onClose, ticketData }: any) => {
  if (!ticketData) return null;
  const tier = TIERS[ticketData.tier as keyof typeof TIERS];

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.ticketContainer}>
          {/* TIER BORDER FRAME */}
          <View style={[styles.tierBorderFrame, { borderColor: tier.main }]}>
            <View style={styles.mainCardBody}>
              {/* TOP SECTION: QR CODE FIRST */}
              <View style={styles.topSection}>
                <View style={styles.statusRow}>
                  <Text style={[styles.statusText, { color: tier.main }]}>
                    {tier.label}
                  </Text>
                </View>

                <View style={styles.qrContainer}>
                  <View style={styles.qrMock}>
                    {[...Array(25)].map((_, i) => (
                      <View
                        key={i}
                        style={[
                          styles.qrBlock,
                          {
                            backgroundColor:
                              Math.random() > 0.4 ? tier.main : "#000",
                          },
                        ]}
                      />
                    ))}
                  </View>
                </View>

                <View style={styles.refreshRow}>
                  <RefreshCcw color={tier.accent} size={12} />
                  <Text style={[styles.refreshText, { color: tier.accent }]}>
                    SECURE TOKEN ACTIVE
                  </Text>
                </View>
              </View>

              {/* PERFORATION DIVIDER */}
              <View style={styles.perforationContainer}>
                <View style={styles.leftHole} />
                <View style={styles.dotDivider} />
                <View style={styles.rightHole} />
              </View>

              {/* BOTTOM SECTION: LOGISTICS & SECURITY */}
              <View style={styles.bottomSection}>
                <Text style={[styles.eventTitle, { color: "#EEE" }]}>
                  {ticketData.title}
                </Text>

                {/* LOGISTICS GRID */}
                <View style={styles.infoGrid}>
                  <View style={styles.infoRow}>
                    <View style={styles.infoItem}>
                      <Calendar size={14} color="#666" />
                      <Text style={styles.infoValue}>{ticketData.date}</Text>
                    </View>
                    <View style={styles.infoItem}>
                      <Clock size={14} color="#666" />
                      <Text style={styles.infoValue}>{ticketData.time}</Text>
                    </View>
                  </View>

                  <View style={styles.infoRow}>
                    <View style={styles.infoItem}>
                      <MapPin size={14} color="#666" />
                      <Text style={styles.infoValue}>Labadi Beach</Text>
                    </View>
                    <View style={styles.infoItem}>
                      <DoorOpen size={14} color="#666" />
                      <Text style={styles.infoValue}>Gate 4 / North</Text>
                    </View>
                  </View>
                </View>

                {/* TICKET ID */}
                <View style={styles.idContainer}>
                  <Text style={[styles.idText, { color: tier.accent }]}>
                    TC-8892-0041-X
                  </Text>
                </View>

                {/* SECURITY DISCLAIMER */}
                <View style={styles.securityBanner}>
                  <ShieldAlert size={12} color="#FF4444" />
                  <Text style={styles.securityText}>
                    SINGLE USE ONLY • NO SCREENSHOTS
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* CLOSE BUTTON */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <X color="#fff" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  ticketContainer: { width: width * 0.9 },
  tierBorderFrame: {
    borderWidth: 1.5,
    borderRadius: 48,
    padding: 6,
    backgroundColor: "#111",
  },
  mainCardBody: {
    backgroundColor: "#050505",
    borderRadius: 42,
    overflow: "hidden",
  },
  topSection: { padding: 30, alignItems: "center" },
  statusRow: { marginBottom: 20 },
  statusText: {
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.5,
  },
  qrContainer: { backgroundColor: "#fff", padding: 20, borderRadius: 24 },
  qrMock: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 160,
    height: 160,
    gap: 4,
  },
  qrBlock: { width: 28, height: 28, borderRadius: 2 },
  refreshRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 20,
  },
  refreshText: { color: "#222", fontSize: 9, fontWeight: "800" },
  perforationContainer: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: -30,
  },
  leftHole: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#000",
    marginLeft: -20,
  },
  rightHole: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#000",
    marginRight: -20,
  },
  dotDivider: {
    flex: 1,
    height: 1,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#111",
    marginHorizontal: 15,
  },
  bottomSection: { padding: 30, paddingTop: 10 },
  eventTitle: {
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 20,
    fontStyle: "italic",
  },
  infoGrid: { gap: 15, marginBottom: 25 },
  infoRow: { flexDirection: "row", justifyContent: "space-between" },
  infoItem: { flexDirection: "row", alignItems: "center", gap: 8, flex: 1 },
  infoValue: { color: "#AAA", fontSize: 13, fontWeight: "600" },
  idContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "center",
    marginBottom: 20,
  },
  idText: {
    color: "#777",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "monospace",
  },
  securityBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#1A0505",
    paddingVertical: 12,
    borderRadius: 12,
  },
  securityText: { color: "#FF4444", fontSize: 9, fontWeight: "900" },
  closeBtn: { marginTop: 30, alignSelf: "center", opacity: 0.3 },
});

export default TicketModal;
