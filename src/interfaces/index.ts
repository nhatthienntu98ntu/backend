import { Document } from 'mongoose';

//!IUser
export interface IUser extends Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    avatar: string;
    gender: boolean;
    birthday: Date;
    phones: string[];
    descriptionBlocked: string;
    groupRoleIds: string[];
    addressIds: string[];
    pollResponseIds: string[];
    statusId: string;
    isDelete: boolean;
    blockedById: string;
    deletedAt: Date;
    blockedAt: Date;
    createdAt: Date;
}

//!IStatus
export interface IStatus extends Document {
    name: string;
    description: string;
}

//!IGroupRoles
export interface IGroupRoles extends Document {
    name: string;
    description: string;
    roleIds: string[];
    createdAt: Date;
}

//!IRoles
export interface IRoles extends Document {
    name: string;
    description: string;
    permissionIds: string[];
    createdAt: Date;
}

//!IPermissions
export interface IPermissions extends Document {
    name: string;
    description: string;
    createdAt: Date;
}

//!IExternalAccounts
export interface IExternalAccounts extends Document {
    name: string;
    userExternalToken: string;
    userExternalId: string;
    otherInformation: object[];
    userId: string;
    externalAccountCategory: string;
}

//!IExternalAccountCategories
export interface IExternalAccountCategories extends Document {
    name: string;
    link: string;
    externalAccountToken: string;
    otherInformation: object[];
}

//!IRooms
export interface IRooms extends Document {
    name: string;
    roomId: string;
    externalAccountCategory: string;
    createdAt: Date;
}

//!IGroupUsers
export interface IGroupUsers extends Document {
    userId: string;
    groupId: string;
    isDelete: boolean;
    createdAt: Date;
}

//!IGroups
export interface IGroups extends Document {
    name: string;
    description: string;
    isDelete: boolean;
    createdById: string;
    createdAt: Date;
}

//!IDiscounts
export interface IDiscounts extends Document {
    name: string;
    conditionDiscount: number;
    discountPrice: number;
    discountPercent: number;
    anOtherDiscount: string[];
    discountDays: string[];
    createdAt: Date;
}

//!IItems
export interface IItems extends Document {
    name: string;
    placeId: string;
    feedBack: object[];
    price: number;
    image: string;
    discountId: string[];
    updatedById: string;
    updatedAt: Date;
    isDelete: boolean;
    deletedAt: Date;
    createdAt: Date;
}

//!IPlaces
export interface IPlaces extends Document {
    name: string;
    open: Date;
    close: Date;
    openDays: string[];
    isDelete: boolean;
    phones: string[];
    feedBack: object[];
    addressIds: string[];
    subCategoryId: string;
    deletedAt: Date;
    createdAt: Date;
}

//!IAddresses
export interface IAddresses extends Document {
    streetAddress: string;
    cityId: string;
    createdAt: Date;
}

//!ICities
export interface ICities extends Document {
    name: string;
    provinceId: string;
    zipCode: number;
    createdAt: Date;
}

//!IProvinces
export interface IProvinces extends Document {
    name: string;
    contryId: string;
    createdAt: Date;
}

//!IContries
export interface IContries extends Document {
    name: string;
    createdAt: Date;
}

//!ISubCategories
export interface ISubCategories extends Document {
    name: string;
    categoryId: string;
    createdAt: Date;
}

//!ICategories
export interface ICategories extends Document {
    name: string;
    questionIds: string[];
    createdAt: Date;
}

//!IEvents
export interface IEvents extends Document {
    title: string;
    description: string;
    startTime: Date;
    duarationTime: number;
    notificationStartTime: Date;
    createdById: string;
    userIds: string[];
    groupIds: string[];
    addressId: string;
    userExcludeIds: string[];
    isComplete: boolean;
    hasQuestion: boolean;
    polls: string[]; //* Mảng chứa danh sách id response
    roomIds: string[];
    configEventId: string;
    categoryId: string;
    isDelete: boolean;
    createdAt: Date;
}

//!IPollResponses
export interface IPollResponses extends Document {
    answerId: string;
    quantity: number;
    others: string;
    userId: string;
    eventId: string;
    questionId: string;
    createdAt: Date;
}

//!IQuestions
export interface IQuestions extends Document {
    question: string;
    multiOptionId: string;
    hasCheck: boolean;
    createdAt: Date;
}

//!IAnswers
export interface IAnswers extends Document {
    name: string;
    questionId: string;
    itemId: string;
    createdAt: Date;
}

//!IMultiOptions
export interface IMultiOptions extends Document {
    typeAnswer: string;
    description: string;
    createdAt: Date;
}

//!INotifications
export interface INotifications extends Document {
    title: string;
    description: string;
    isSeen: boolean;
    eventId: string;
    userId: string;
    timeSeen: Date;
    createdAt: Date;
}

//!IOrders
export interface IOrders extends Document {
    total: number;
    discount: number;
    addressId: string;
    eventId: string;
    createdById: string;
    createdAt: Date;
}

//!IOrderDetails
export interface IOrderDetails extends Document {
    orderId: string;
    answerId: string;
    userId: string;
    quantity: number;
    discount: number;
    others: string;
    questionId: string;
    createdAt: Date;
}

//!IConfigUsers
export interface IConfigUsers extends Document {
    userId: string;
    categoryId: string;
    name: string;
    description: string;
    value: number;
    updatedAt: Date;
    createdAt: Date;
}

//!IConfigEvents
export interface IConfigEvents extends Document {
    name: string;
    description: string;
    durationRepeat: number;
    timeRepeat: number;
    updatedAt: Date;
    createdAt: Date;
}

//!IUserLogin
export interface IUserLogin {
    email: string;
    password: string;
}

//!ITokenDecode
export interface ITokenDecode {
    uid: string;
    groupRoleIds: string[];
}

//!IUserDelete
export interface IUserDelete {
    _idUser: string;
    _idUserBlock: string;
}
