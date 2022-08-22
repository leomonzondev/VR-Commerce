import chager from "../assets/images/cargador.png";
import link from "../assets/images/link.png";
import strap from "../assets/images/vincha.png";
import auri from "../assets/images/auriculares.png";

import head from "../assets/images/head.png";
import controllers from "../assets/images/controllers.png";
import enchufe from "../assets/images/enchufe.png";
import ojosvincha from "../assets/images/ojosvincha.png";

export const principal = [
  {
    id: "1",
    title: "VR Headset",
    description: "",
    price: 122,
    img: head,
    type: "principal",
  },
  {
    id: "2",
    title: "Two Touch Controllers & AA Batteries",
    description: "",
    price: 122,
    img: controllers,
    type: "principal",
  },
  {
    id: "3",
    title: "Charging Cable & Power Adapter",
    description: "",
    price: 122,
    img: enchufe,
    type: "principal",
  },
  {
    id: "4",
    title: "Glasses Spacer",
    description: "",
    price: 122,
    img: ojosvincha,
    type: "principal",
  },
];

export const accesories = [
  {
    id: "5",
    title: "Anker Charging Dock",
    description:
      "Securely store your Omni Quest and Touch controllers on this 2-in-1 charging dock",
    price: 99,
    img: chager,
    type: "accessorie",
  },
  {
    id: "6",
    title: "Link Cable",
    description: "Acces the Zenit library with Omni Quest",
    price: 79,
    img: link,
    type: "accessorie",
  },
  {
    id: "7",
    title: "Elite Strap with Battery",
    description: "Go all in with an ergonomic strap and built-in battery",
    price: 109,
    img: strap,
    type: "accessorie",
  },
  {
    id: "8",
    title: "VR Gaming Earphones",
    description: "меа ипсум суммо ин. губергрен медиоцритатем намдуо.",
    price: 50,
    img: auri,
    type: "accessorie",
  },
];
