import { IApiResult } from '@eway-crm/connector';

export type TContactsResponse = IApiResult & {
  Data: TContact[];
};

export type TContact = {
  FileAs: string | null;
};
