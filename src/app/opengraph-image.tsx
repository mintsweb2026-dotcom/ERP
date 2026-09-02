import { ImageResponse } from "next/og";

export const alt = "Mints Global ERP — One Command Center for HR, CRM, Projects & Automations";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#182012",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient Olive Glow */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            backgroundColor: "rgba(104, 120, 56, 0.25)",
            filter: "blur(90px)",
          }}
        />

        {/* Top Header Row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 22px",
              borderRadius: "9999px",
              backgroundColor: "rgba(237, 242, 226, 0.12)",
              border: "1px solid rgba(219, 228, 199, 0.3)",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#687838",
              }}
            />
            <span
              style={{
                color: "#DBE4C7",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Enterprise Operating System
            </span>
          </div>

          <span
            style={{
              color: "#8FA363",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            UAE • UK • India • Europe
          </span>
        </div>

        {/* Main Center Message */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "950px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Mints Global ERP
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 500,
              color: "#DBE4C7",
              lineHeight: 1.35,
            }}
          >
            One Command Center for HR, CRM, Projects, Finance &amp; Automated Workflows.
            Serverless speed with sub-250ms telemetry and 5-tier RBAC security.
          </div>
        </div>

        {/* Bottom Footer Info */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <span style={{ color: "#FFFFFF", fontSize: "20px", fontWeight: 700 }}>
              erp.mintsglobal.ae
            </span>
            <span style={{ color: "#8FA363", fontSize: "16px" }}>
              HQ: Bank Street Building, Bur Dubai, Dubai, UAE
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "14px",
              backgroundColor: "#687838",
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            18 Modules Included
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
