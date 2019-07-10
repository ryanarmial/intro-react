export const logging = store => next => action => {
  console.log('halo aku dari middleware')
  next(action)
}