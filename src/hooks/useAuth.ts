// export const useAuth = () => {
//   const [accessToken, setAccessToken] = useState<string | undefined>();
//   const [refreshToken, setRefreshToken] = useState<string | undefined>();
//   const { pathname } = useLocation();
//   const accessTokenFromStorage = localStorage.getItem("access_token");
//   const refreshTokenFromStorage = localStorage.getItem("refresh_token");

//   //   useEffect(() => {
//   //     console.log(accessTokenFromStorage, refreshTokenFromStorage);
//   //     if (accessTokenFromStorage && refreshTokenFromStorage) {
//   //       setAccessToken(accessTokenFromStorage);
//   //       setRefreshToken(refreshTokenFromStorage);
//   //     }
//   //   }, [pathname, accessToken, refreshToken]);

//   return {
//     isLoggedIn: !!accessTokenFromStorage || !!refreshTokenFromStorage,
//     accessToken,
//     refreshToken,
//   };
// };
