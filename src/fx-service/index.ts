import { ConvertService } from "./convert.service";
import { router as currencyRouter} from "./convert.routes"

const convertService = new ConvertService();

export{
    convertService,
    currencyRouter
};