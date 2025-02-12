import type { ReactNode } from "react";
import { useGetUserProfile } from "../queries";
import { Avatar, Tab, Tabs } from "@heroui/react";

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
  const { data } = useGetUserProfile();

  return (
    <div className="max-w-screen-xl px-4 mx-auto py-4">
      <h4 className="text-2xl font-semibold mb-4">My Profile</h4>
      <Tabs color="primary">
        <Tab key="profile" title="Profile Details">
          <div className="w-full grid grid-cols-12 gap-6 bg-default-100 border rounded-md p-8">
            <div className="col-span-12 flex items-center gap-4">
              <Avatar size="lg" name="H" color="primary" isBordered />
              <div>
                <h4 className="text-xl font-semibold">
                  {data?.data.firstName} {data?.data.lastName}
                </h4>
                <h4 className="text-xl">dev@gmail.com</h4>
              </div>
            </div>
            <div className="col-span-6">
              <LabelAndValue label="First Name" value={data?.data.firstName} />
            </div>
            <div className="col-span-6">
              <LabelAndValue label="Last Name" value={data?.data.lastName} />
            </div>
            <div className="col-span-6">
              <LabelAndValue
                label="Prefer Name"
                value={data?.data.preferName}
              />
            </div>
            <div className="col-span-6">
              <LabelAndValue label="Location" value={data?.data.location} />
            </div>
            <div className="col-span-6">
              <LabelAndValue label="Phone No." value={data?.data.phoneNo} />
            </div>
            <div className="col-span-6">
              <LabelAndValue label="Joined At" value={data?.data.createdAt} />
            </div>
          </div>
        </Tab>
        <Tab key="account" title="Account Details">
          <div className="w-full grid grid-cols-12 gap-6 bg-default-100 border rounded-md p-8">
            <div className="col-span-6">
              <LabelAndValue label="First Name" value={data?.data.firstName} />
            </div>
            <div className="col-span-6">
              <LabelAndValue label="Last Name" value={data?.data.lastName} />
            </div>
            <div className="col-span-6">
              <LabelAndValue
                label="Prefer Name"
                value={data?.data.preferName}
              />
            </div>
            <div className="col-span-6">
              <LabelAndValue label="Location" value={data?.data.location} />
            </div>
            <div className="col-span-6">
              <LabelAndValue label="Phone No." value={data?.data.phoneNo} />
            </div>
            <div className="col-span-6">
              <LabelAndValue label="Joined At" value={data?.data.createdAt} />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
