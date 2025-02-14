type UserProfile = {
  id: string;
  firstName: string;
  lastName: string;
  code: string | null;
  preferName: string | null;
  phoneNumber: string | null;
  location: string | null;
  status: string | null;
  isComplete: boolean;
  isBlocked: boolean;
  createdAt: string;
  accountId: string;
  account: {
    id: string;
    email: string;
    createdAt: string;
  };
};

type UpdateUserProfilePayload = {
  firstName: string;
  lastName: string;
  code: string | null;
  preferName: string | null;
  phoneNumber: string | null;
  location: string | null;
};

export type { UserProfile, UpdateUserProfilePayload };

// {
//     "id": "cm1cbkwop000551vt3aojih6f",
//     "firstName": "kyawzin",
//     "lastName": "lin",
//     "code": null,
//     "preferName": null,
//     "phoneNumber": null,
//     "location": null,
//     "status": null,
//     "isComplete": false,
//     "isBlocked": false,
//     "createdAt": "2024-09-21T15:43:57.817Z",
//     "accountId": "cm1cbkwnt000351vtuwzmfrrm",
//     "account": {
//         "id": "cm1cbkwnt000351vtuwzmfrrm",
//         "email": "kzl.dev@gmail.com",
//         "password": "$2b$10$pRHzMzlok1DfV/tbe.zL/OmxXwSH/Ftpddqz9/Eq2U2hOFrtLUVDe",
//         "refreshToken": "$2b$10$sXEhBzoNzXlO/P5DiJttIOH98lDZ03A3zwNjZQLAuy3M1StQokrqu",
//         "passwordResetToken": null,
//         "passwordChangeAt": null,
//         "passwordResetExpires": null,
//         "createdAt": "2024-09-21T15:43:57.786Z"
//     },
//     "appointments": [],
//     "properties": []
// }
