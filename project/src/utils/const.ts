export enum AppRoutes {
  Root = '/',
  Login = '/login',
  MyList = '/myList',
  FilmsRoot = '/films/',
  FilmsReview = '/review',
  PlayerRoot = '/player/',
  NotFoundPage = '/pageNotFound',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoutes {
  Films = '/films',
  PromoFilm = '/promo',
  Similar = '/similar',
  Reviews = '/comments/',
  Login = '/login',
  Logout = '/logout',
}

export enum AppStatus {
  Loading,
  Ok,
}

