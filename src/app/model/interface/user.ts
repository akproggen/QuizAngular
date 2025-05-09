export interface IUser {
    id: number;
    username: string;
    name: string;
    email: string;
    created_at: string;
    updated_at: string | null;
    pwd_hash: string;
    salt: string;
    pwd: string;
  }



export interface IAddress {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}
export interface IContactInfo {
    email: string;
    phone: string;
}
export interface IUserProfile {
    id: number;
    name: string;
    address: IAddress;
    contactInfo: IContactInfo;
}