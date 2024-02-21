// // import {getUser} from './api';
// // import {IUser} from '../interfaces/interfaces';
//
//
// export default async function getHeader() {
//   try {
//     const user = await getUser();
//     if (!user) {
//       return null;
//     }
//     const props: IUser = {firstName: '', lastName: ''};
//     if (user) {
//       props.firstName = user.first_name;
//       props.lastName = user.last_name;
//     }
//     return props;
//   } catch (error: any) {
//     console.error('Error:', error);
//   }
// }
export {};