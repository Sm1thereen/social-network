// import {getUserById} from './api';
//
// export default async function getHeader() {
//   const accessToken = localStorage.getItem('accessToken');
//   try {
//     const user = await getUserById();
//     if (!user) {
//       return null;
//     }
//     const props = {firstName: '', lastName: ''};
//     if (user) {
//       props.firstName = user.first_name;
//       props.lastName = user.last_name;
//     }
//     return props;
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
export {};
