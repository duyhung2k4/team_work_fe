import { notifications } from "@mantine/notifications"
import { IconAlertSquare, IconCheck, IconX } from "@tabler/icons-react"

export const useNotification = () => {
  const settingNotification = {
    autoClose: 3000,
  }
  return {
    success: (message: React.ReactNode) => {
      notifications.show({
        message,
        title: "Thành công",
        icon: <IconCheck size="1rem" />,
        color: "teal",
        ...settingNotification
      })
    },
    warning: (message: React.ReactNode) => {
      notifications.show({
        message,
        title: "Cảnh báo",
        icon: <IconAlertSquare size="1rem" />,
        color: "yellow",
        ...settingNotification
      })
    },
    error: (message: React.ReactNode) => {
      notifications.show({
        message,
        title: "Thất bại",
        icon: <IconX size="1rem" />,
        color: "red",
        ...settingNotification
      })
    }
  }
}