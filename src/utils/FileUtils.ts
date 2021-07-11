export function getStoryPath(baseAbsolute : string, wd : string, file : string){
    return baseAbsolute.replace(wd, "")+file
}