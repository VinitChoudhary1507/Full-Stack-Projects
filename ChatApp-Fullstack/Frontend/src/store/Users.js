import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import { io } from "socket.io-client";
const BASE_URL = "http://localhost:4000/"

export const userAuthStore = create((set, get) => ({
    authUser: null,
    isLogging: false,
    socket: null,
    checkAuth: async () => {
        try {
            const res = axiosInstance.get('/auth/check')
            set({ authUser: res.data })

        }
        catch (error) {
            console.log("Error in checkAuth", error)
            set({ authUser: null })
        }
        finally {
            set({ isChecking: false })
        }
    },
    signup: async (data) => {
        try {
            const res = await axiosInstance.post('/route/signup/', data)
            set({ authUser: res.data })

        } catch (error) {

        }
    },
    login: async (data) => {
        try {
            const res = axiosInstance.post('/auth/login', data)
            set({ authUser: res.data })

        } catch (error) {

        }
    },
    connectSocket: async () => {
        const { authUser, socket } = get();
            if (!authUser || socket) return; 
        try {
            // Unique id per connection 
            const newSocket = io(BASE_URL, {
                query: {
                    userId: authUser._id,
                },
            });
            // newSocket.on("getOnlineUsers", (userIds) => {
            //     set({ onlineUsers: userIds });
            // });
            newSocket.on("connect", () => {
                console.log("Socket connected: ", newSocket.id);
                set({ socket: newSocket, userID: newSocket.id });
            });

        } catch (error) {

        }
    }
})) 
