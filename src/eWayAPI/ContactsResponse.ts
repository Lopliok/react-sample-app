import { IApiResult } from '@eway-crm/connector';

export type TContactsResponse = IApiResult & {
  Data: TContact[];
};

export type TContact = {
  FileAs: string | null;
  AdditionalFields: null;
  BusinessAddressCity: string;
  BusinessAddressCountryEn: string;
  BusinessAddressPOBox: string;
  BusinessAddressPostalCode: string;
  BusinessAddressState: string;
  BusinessAddressStreet: string;
  Company: null;
  CreatedByGUID: string;
  Department: string;
  DoNotSendNewsletter: boolean;
  Email1Address: string;
  Email2Address: string;
  Email3Address: string;
  FirstName: string;
  HomeAddressCity: string;
  HomeAddressCountryEn: string | null;
  HomeAddressPOBox: string;
  HomeAddressPostalCode: string;
  HomeAddressState: string;
  HomeAddressStreet: string;
  ICQ: string;
  ImportanceEn: null;
  IsPrivate: boolean;
  ItemChanged: string; // nebo Date, pokud chceš parsovat
  ItemCreated: string; // nebo Date
  ItemGUID: string;
  ItemVersion: number;
  LastActivity: string; // nebo Date
  LastName: string;
  MSN: string;
  MiddleName: string;
  ModifiedByGUID: string;
  NextStep: null;
  Note: string;
  OtherAddressCity: string;
  OtherAddressCountryEn: string | null;
  OtherAddressPOBox: string;
  OtherAddressPostalCode: string;
  OtherAddressState: string;
  OtherAddressStreet: string;
  OwnerGUID: string;
  PrefixEn: null;
  PrevStateEn: null;
  ProfilePicture: string; // pokud je to base64, může být `string | null`
  ProfilePictureHeight: number;
  ProfilePictureWidth: number;
  Relations: null;
  Server_ItemChanged: null;
  Server_ItemCreated: null;
  Skype: string;
  StateEn: null;
  SuffixEn: null;
  TelephoneNumber1: string;
  TelephoneNumber1Normalized: string;
  TelephoneNumber2: string | null;
  TelephoneNumber2Normalized: string | null;
  TelephoneNumber3: string | null;
  TelephoneNumber3Normalized: string | null;
  TelephoneNumber4: string | null;
  TelephoneNumber4Normalized: string | null;
  TelephoneNumber5: string | null;
  TelephoneNumber5Normalized: string | null;
  TelephoneNumber6: string | null;
  TelephoneNumber6Normalized: string | null;
  Title: string;
  TypeEn: null;
  WebPage: string;
};
