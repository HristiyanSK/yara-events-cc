import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";
import { DataItem } from "../types/types";

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});

const PrintableList = ({ items }: { items: DataItem[] }) => {
  return (
    <Document>
      <Page style={styles.container}>
        {items.map((item: DataItem) => (
          <Text key={item.id}>
            Name: {item.name} - {item.summary} Date: {item.start_date}
            {item.start_time} Location:{" "}
            {item.primary_venue.address.localized_area_display} Tickets:{" "}
            {item.ticketCount} ×{" "}
            {item.ticket_availability.maximum_ticket_price.display}
          </Text>
        ))}
      </Page>
    </Document>
  );
};

export default PrintableList;
