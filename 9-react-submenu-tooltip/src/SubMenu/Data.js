import React from "react"
import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa"

const Sublinks = [
  {
    page: "products",
    links: [
      {
        label: "payment",
        icon: <FaCreditCard />,
        url: "/payment",
      },
      {
        label: "terminal",
        icon: <FaCreditCard />,
        url: "/terminal",
      },
      {
        label: "connect",
        icon: <FaCreditCard />,
        url: "/connect",
      },
    ],
  },
  {
    page: "developers",
    links: [
      {
        label: "plugins",
        icon: <FaBook />,
        url: "/plugins",
      },
      {
        label: "Libraries",
        icon: <FaBook />,
        url: "/libraries",
      },
      {
        label: "help",
        icon: <FaBook />,
        url: "/help",
      },
      {
        label: "billing",
        icon: <FaBook />,
        url: "/billing",
      },
    ],
  },
  {
    page: "company",
    links: [
      {
        label: "about",
        icon: <FaBriefcase />,
        url: "/about",
      },
      {
        label: "customers",
        icon: <FaBriefcase />,
        url: "/customers",
      },
    ],
  },
]

export default Sublinks
