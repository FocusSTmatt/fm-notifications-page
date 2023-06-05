import MarkWebber from './assets/images/avatar-mark-webber.webp'
import AngelaGray from './assets/images/avatar-angela-gray.webp'
import JacobThompson from './assets/images/avatar-mark-webber.webp'
import RizkyHasanuddin from './assets/images/avatar-rizky-hasanuddin.webp'
import KimberlySmith from './assets/images/avatar-kimberly-smith.webp'
import ImageChess from './assets/images/image-chess.webp'
import NathanPeterson from './assets/images/avatar-nathan-peterson.webp'
import AnnaKim from './assets/images/avatar-anna-kim.webp'





export const notificationData = [
    {
        userImage: MarkWebber,
        userName: "Mark Webber",
        userAction: "reacted to your recent post",
        title: "My First Tournement",
        message: "",
        timeOfMessage: "1m ago",
        isClicked: false,
        id: 1,
    },

    {
        userImage: AngelaGray,
        userName: "Angela Gray",
        userAction: "followed you",
        title: "",
        message: "",
        timeOfMessage: "5m ago",
        isClicked: false,
        id: 2,
    },

    {
        userImage: JacobThompson,
        userName: "Jacob Thompson",
        userAction: "has joined your group",
        title: "Chess Club",
        message: "",
        timeOfMessage: "1day ago",
        isClicked: false,
        id: 3,
    },

    {
        userImage: RizkyHasanuddin,
        userName: "Rizky Hasanuddin",
        userAction: "sent you a private message",
        title: "",
        message: "Hello, thanks for setting up the Chess Club." +
        "I've been a member for a few weeks not and I'm already" +
        "having lots of fun and improving my game.",
        timeOfMessage: "",
        isClicked: false,
        id: 4,
    },

    {
        userImage: KimberlySmith,
        userName: "Kimberly Smith",
        userAction: "commented on your picture",
        commentedPhoto: {ImageChess},
        title: "",
        message: "",
        timeOfMessage: "1week ago",
        isClicked: false,
        id: 5,
    },

    {
        userImage: NathanPeterson,
        userName: "Nathan Peterson",
        userAction: "reacted to your recent post",
        title: "5 end-game strategies to increase your win rate",
        message: "",
        timeOfMessage: "2weeks ago",
        isClicked: false,
        id: 6,
    },

    {
        userImage: AnnaKim,
        userName: "Anna Kim",
        userAction: "left the group",
        title: "Chess Club",
        message: "",
        timeOfMessage: "2weeks ago",
        isClicked: false,
        id: 7,
    },


]