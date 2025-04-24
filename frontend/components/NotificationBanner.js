import { useState, useEffect } from "react";
import "./notificationBanner.css";

const NotificationBanner = ({ message, type }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        visible && (
            <div className={`notification-banner ${type}`}>
                <p>{message}</p>
            </div>
        )
    );
};

export default NotificationBanner
