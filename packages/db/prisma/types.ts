import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { CommonState, TaskType, LoginType, Ecosystem, Blockchain, Network, ChatStatus, ImageScenario, ImageService, GemType } from "./enums";

export type CategoriesOnProjects = {
    projectId: string;
    categoryId: string;
    createBy: string;
    createDt: Generated<Timestamp>;
};
export type Category = {
    id: Generated<string>;
    ecosystem: Ecosystem;
    lv1: string;
    lv2: string;
    extJson: unknown | null;
    createBy: string | null;
    createDt: Generated<Timestamp>;
    modifyBy: string | null;
    modifyDt: Timestamp;
};
export type Gem = {
    id: Generated<string>;
    ownerTgId: string;
    projectId: string | null;
    name: string;
    type: GemType;
    upvote: Generated<number>;
    tagline: string | null;
    rules: string | null;
    extJson: unknown | null;
    createBy: string | null;
    createDt: Generated<Timestamp>;
    modifyBy: string | null;
    modifyDt: Timestamp;
};
export type GemsOnUsers = {
    userId: string;
    gemId: string;
    state: CommonState;
    extJson: unknown | null;
    createBy: string;
    createDt: Generated<Timestamp>;
};
export type GemVote = {
    id: Generated<string>;
    gemId: string;
    voteBy: string;
    createBy: string | null;
    createDt: Generated<Timestamp>;
};
export type Image = {
    id: Generated<string>;
    scenario: ImageScenario;
    bindId: string | null;
    service: ImageService;
    url: string;
    extJson: unknown | null;
    createBy: string | null;
    createDt: Generated<Timestamp>;
};
export type Project = {
    id: Generated<string>;
    ownerTgId: string;
    name: string | null;
    tagline: string | null;
    desc: string | null;
    langCodes: string | null;
    ecosystem: Generated<Ecosystem>;
    website: string | null;
    twitter: string | null;
    tgChannel: string | null;
    tgChat: string | null;
    tgBot: string | null;
    iconImg: string | null;
    imgService: ImageService;
    upvote: Generated<number>;
    extJson: unknown | null;
    createBy: string | null;
    createDt: Generated<Timestamp>;
    modifyBy: string | null;
    modifyDt: Timestamp;
};
export type ProjectVote = {
    id: Generated<string>;
    projectId: string;
    voteBy: string;
    createBy: string | null;
    createDt: Generated<Timestamp>;
};
export type Task = {
    id: Generated<string>;
    type: TaskType;
    target: string;
    extJson: unknown | null;
    createBy: string | null;
    createDt: Generated<Timestamp>;
    modifyBy: string | null;
    modifyDt: Timestamp;
    gemId: string;
};
export type TasksOnUsers = {
    userId: string;
    taskId: string;
    gemId: string | null;
    state: CommonState;
    extJson: unknown | null;
    createBy: string;
    createDt: Generated<Timestamp>;
};
export type User = {
    id: Generated<string>;
    loginType: LoginType;
    tgId: string;
    tgUsername: string | null;
    firstName: string | null;
    lastName: string | null;
    profileImg: string | null;
    isPremium: Generated<boolean>;
    refCode: string;
    referBy: string | null;
    langCode: string | null;
    totalPoints: Generated<string>;
    extJson: unknown | null;
    createBy: string | null;
    createDt: Generated<Timestamp>;
    modifyBy: string | null;
    modifyDt: Timestamp;
};
export type UserAction = {
    id: Generated<string>;
    opTgId: string;
    opDisplayName: string | null;
    actionType: string;
    selfReward: string | null;
    targetTgId: string | null;
    targetReward: string | null;
    targetDisplayName: string | null;
    extJson: unknown | null;
    createBy: string | null;
    createDt: Generated<Timestamp>;
    modifyBy: string | null;
    modifyDt: Timestamp;
};
export type WalletInfo = {
    id: Generated<string>;
    tgId: string;
    chain: Blockchain;
    network: Network;
    address: string;
    balance: string | null;
    loginDt: Generated<Timestamp>;
    extJson: unknown | null;
    createBy: string | null;
    createDt: Generated<Timestamp>;
    modifyBy: string | null;
    modifyDt: Timestamp;
};
export type DB = {
    CategoriesOnProjects: CategoriesOnProjects;
    Category: Category;
    Gem: Gem;
    GemsOnUsers: GemsOnUsers;
    GemVote: GemVote;
    Image: Image;
    Project: Project;
    ProjectVote: ProjectVote;
    Task: Task;
    TasksOnUsers: TasksOnUsers;
    User: User;
    UserAction: UserAction;
    WalletInfo: WalletInfo;
};
