import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRout from "./PrivateRout";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/sendPercel/SendParcel";
import Dashboard from "../layouts/Dashboard";
import MyParcels from "../pages/dashboard/MyParcels";

import PaymentSuccess from "../pages/Paymnet/PaymentSuccess";
import PaymentCancelled from "../pages/Paymnet/PaymentCancelled";
import Payment from "../pages/Paymnet/Payment";
import PaymentHistory from "../pages/dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/dashboard/UsersManagement/UsersManagement";
import AdminRout from "./AdminRout";
import AssignRider from "../pages/dashboard/AssignRider/AssignRider";
import RiderRoute from "./RiderRout";
import AssignedDeliveries from "../pages/dashboard/AssignedDeliveris/AssignedDeliveries";
import CompletedDeliveries from "../pages/dashboard/CompletedDeliveries/CompletedDeliveries";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";
import DashboardHome from "../pages/dashboard/DashboardHome/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "parcel-track/:trackingId",
        Component: ParcelTrack,
      },
      {
        path: "send-parcel",
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
        element: (
          <PrivateRout>
            <SendParcel></SendParcel>
          </PrivateRout>
        ),
      },

      {
        path: "/rider",
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
        element: (
          <PrivateRout>
            <Rider></Rider>
          </PrivateRout>
        ),
      },
      {
        path: "/payment/parcelId",
        Component: Payment,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayouts,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRout>
        <Dashboard></Dashboard>
      </PrivateRout>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />, // ✅ this is correct
      },
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },

      {
        path: "assigned-deliveries",
        element: (
          <RiderRoute>
            <AssignedDeliveries></AssignedDeliveries>
          </RiderRoute>
        ),
      },
      {
        path: "completed-deliveries",
        element: (
          <RiderRoute>
            <CompletedDeliveries></CompletedDeliveries>
          </RiderRoute>
        ),
      },
      {
        path: "approve-riders",
        element: (
          <AdminRout>
            <ApproveRiders></ApproveRiders>
          </AdminRout>
        ),
      },
      {
        path: "users-management",
        element: (
          <AdminRout>
            <UsersManagement></UsersManagement>
          </AdminRout>
        ),
      },
      {
        path: "assign-riders",
        element: (
          <AdminRout>
            <AssignRider></AssignRider>
          </AdminRout>
        ),
      },
    ],
  },
]);
