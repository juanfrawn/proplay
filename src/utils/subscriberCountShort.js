export const subscriberCountShort = (subs) => {
    if (parseInt(subs) > 1000000) {
        return `${Math.floor(subs / 1000000)} M`
    } else if (subs > 1000) {
        return `${Math.floor(subs / 1000)}K`
    } else {
        return subs
    }
}
