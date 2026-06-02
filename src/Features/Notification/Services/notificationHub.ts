import * as signalR from "@microsoft/signalr";
import { BASE_URL } from "../../Home/Utils/Api";

let connection: signalR.HubConnection | null = null;

export const getNotificationConnection = () => {


    connection = new signalR.HubConnectionBuilder()
        .withUrl(`${BASE_URL}/hubs/notifications`, {
            accessTokenFactory: () => localStorage.getItem("token") || "",
            transport: signalR.HttpTransportType.LongPolling
        })
        .withAutomaticReconnect()
        .configureLogging(signalR.LogLevel.Warning)
        .build();

    return connection;
};

export const startNotificationHub = async () => {
    const conn = getNotificationConnection();
    if (conn.state === signalR.HubConnectionState.Disconnected) {
        try {
            await conn.start();
        } catch (error) {
            console.error("SignalR Notification Hub connection error: ", error);
        }
    }
    return conn;
};

export const stopNotificationHub = async () => {
    if (connection && connection.state !== signalR.HubConnectionState.Disconnected) {
        await connection.stop();
    }
};
