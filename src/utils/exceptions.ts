export class NotAuthenticatedError extends Error {
  constructor(message = 'You must be authenticated to access this page') {
    super(message)
    this.name = 'NotAuthenticatedError'
  }
}

export class NotAdminError extends Error {
  constructor(message = 'You must be an admin to access this page') {
    super(message)
    this.name = 'NotAdminError'
  }
}