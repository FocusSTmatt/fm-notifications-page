import MarkWebber from './assets/images/avatar-mark-webber.webp'
import AngelaGray from './assets/images/avatar-angela-gray.webp'
import JacobThompson from './assets/images/avatar-mark-webber.webp'
import RizkyHasanuddin from './assets/images/avatar-rizky-hasanuddin.webp'
import KimberlySmith from './assets/images/avatar-kimberly-smith.webp'
import ImageChess from './assets/images/image-chess.webp'
import NathanPeterson from './assets/images/avatar-nathan-peterson.webp'
import AnnaKim from './assets/images/avatar-anna-kim.webp'





export const object = [
    {
        image: MarkWebber,
        name: "Mark Webber",
        action: "reacted to your recent post",
        title: "My First Tournement",
        message: "",
        timeOfMessage: "1m ago",
        toggled: false,
        id: 1,
    },

    {
        image: AngelaGray,
        name: "Angela Gray",
        action: "followed you",
        title: "",
        message: "",
        timeOfMessage: "5m ago",
        toggled: false,
        id: 2,
    },

    {
        image: JacobThompson,
        name: "Jacob Thompson",
        action: "has joined your group",
        title: "Chess Club",
        message: "",
        timeOfMessage: "1day ago",
        toggled: false,
        id: 3,
    },

    {
        image: RizkyHasanuddin,
        name: "Rizky Hasanuddin",
        action: "sent you a private message",
        title: "",
        message: "Hello, thanks for setting up the Chess Club." +
        "I've been a member for a few weeks not and I'm already" +
        "having lots of fun and improving my game.",
        timeOfMessage: "",
        toggled: false,
        id: 4,
    },

    {
        image: KimberlySmith,
        name: "Kimberly Smith",
        action: "commented on your picture",
        commentedPhoto: {ImageChess},
        title: "",
        message: "",
        timeOfMessage: "1week ago",
        toggled: false,
        id: 5,
    },

    {
        image: NathanPeterson,
        name: "Nathan Peterson",
        action: "reacted to your recent post",
        title: "5 end-game strategies to increase your win rate",
        message: "",
        timeOfMessage: "2weeks ago",
        toggled: false,
        id: 6,
    },

    {
        image: AnnaKim,
        name: "Anna Kim",
        action: "left the group",
        title: "Chess Club",
        message: "",
        timeOfMessage: "2weeks ago",
        toggled: false,
        id: 7,
    },


]