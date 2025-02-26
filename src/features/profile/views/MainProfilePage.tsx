import type { ReactNode } from "react";
import { Skeleton, Tab, Tabs } from "@heroui/react";
import ProfileSetting from "../components/ProfileSetting";

const LabelAndValue = ({
  label,
  value,
}: {
  label: string;
  value?: ReactNode;
}) => {
  return (
    <div className="w-full">
      <h4 className="text-lg text-primary font-medium">{label}</h4>
      <span className="text-lg">{value || "-"}</span>
    </div>
  );
};

export default function MainProfilePage() {
  return (
    <div className="max-w-screen-xl px-4 mx-auto py-4">
      <h4 className="text-2xl font-semibold mb-4">My Profile</h4>
      <Tabs
        color="primary"
        placement="start"
        classNames={{
          tabList: "bg-default-200 p-3",
        }}
      >
        <Tab key="profile" title="Profile Setting" className="flex-grow">
          <ProfileSetting />
        </Tab>
        <Tab key="account" title="Saved Properties" className="flex-grow">
          <ProfileSetting />
        </Tab>
      </Tabs>
    </div>
  );
}
