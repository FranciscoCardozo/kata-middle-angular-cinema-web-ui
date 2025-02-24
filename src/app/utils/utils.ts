export default class Utils{
  public static getDynamoProp(obj: any){
    return Object.entries(obj).map(([key,value]) => {
      console.log(obj, key);
      return obj[key];
    })[0];
  }
}
