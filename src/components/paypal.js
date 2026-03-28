"use client";

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalButton() {
  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}
    >
      <PayPalButtons
        createOrder={async () => {
          const res = await fetch("/api/create", {
            method: "POST",
          });
          const data = await res.json();
          return data.id;
        }}
        onApprove={async (data) => {
          const res = await fetch("/api/capture", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ orderID: data.orderID }),
          });

          const details = await res.json();
        }}
      />
    </PayPalScriptProvider>
  );
}