export const CommonState = {
    Init: "Init",
    Pending: "Pending",
    Done: "Done",
    Fail: "Fail"
} as const;
export type CommonState = (typeof CommonState)[keyof typeof CommonState];
export const TaskType = {
    GroupJoin: "GroupJoin",
    ChannelJoin: "ChannelJoin",
    MiniAppOpen: "MiniAppOpen",
    TwitterFollow: "TwitterFollow",
    TwitterReply: "TwitterReply",
    TwitterLike: "TwitterLike",
    TwitterRepost: "TwitterRepost",
    WebsiteOpen: "WebsiteOpen",
    DiscordJoin: "DiscordJoin",
    WalletConnect: "WalletConnect"
} as const;
export type TaskType = (typeof TaskType)[keyof typeof TaskType];
export const LoginType = {
    TgAuth: "TgAuth",
    MiniApp: "MiniApp"
} as const;
export type LoginType = (typeof LoginType)[keyof typeof LoginType];
export const Ecosystem = {
    Bitcoin: "Bitcoin",
    Ethereum: "Ethereum",
    BNB: "BNB",
    Solana: "Solana",
    Toncoin: "Toncoin",
    Artela: "Artela"
} as const;
export type Ecosystem = (typeof Ecosystem)[keyof typeof Ecosystem];
export const Blockchain = {
    TON: "TON",
    SOL: "SOL",
    ETH: "ETH"
} as const;
export type Blockchain = (typeof Blockchain)[keyof typeof Blockchain];
export const Network = {
    Mainnet: "Mainnet",
    Testnet: "Testnet",
    Custom: "Custom"
} as const;
export type Network = (typeof Network)[keyof typeof Network];
export const ChatStatus = {
    creator: "creator",
    member: "member",
    administrator: "administrator",
    restricted: "restricted",
    left: "left",
    kicked: "kicked"
} as const;
export type ChatStatus = (typeof ChatStatus)[keyof typeof ChatStatus];
export const ImageScenario = {
    Project: "Project",
    Gem: "Gem",
    Matcher: "Matcher",
    Newsletter: "Newsletter",
    Service: "Service",
    Tool: "Tool",
    Other: "Other"
} as const;
export type ImageScenario = (typeof ImageScenario)[keyof typeof ImageScenario];
export const ImageService = {
    Local: "Local",
    AwsS3: "AwsS3",
    AliyunOSS: "AliyunOSS",
    CloudflareImage: "CloudflareImage"
} as const;
export type ImageService = (typeof ImageService)[keyof typeof ImageService];
export const GemType = {
    Coupon: "Coupon",
    Cashback: "Cashback",
    Discount: "Discount",
    FreeTrial: "FreeTrial",
    Giveaway: "Giveaway",
    Groupon: "Groupon",
    Lottery: "Lottery",
    LoyaltyPoints: "LoyaltyPoints",
    ReferralBonus: "ReferralBonus",
    SpinTheWheel: "SpinTheWheel",
    Whitelist: "Whitelist",
    Other: "Other"
} as const;
export type GemType = (typeof GemType)[keyof typeof GemType];
