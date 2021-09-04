import baseApi from "../http/baseApi";
import tasks from "../data/tasks";

const taskService = {
    getTasks() {
        const dataSource = process.env.VUE_APP_DATA_SOURCE;

        if (dataSource == "1C") {
            const response = baseApi.get(
                "Catalog_ВнешниеЗадачи?$format=application/json"
            );

            let items = []
            response.then(({ data }) => {
                data.value.forEach((element) => {
                    items.push({
                        id: element.Ref_Key,
                        title: element.Description,
                        date: element.ДатаСоздания,
                        status: element.Статус,
                        from: element.Инициатор,
                        project: element.ПроектЗакупки,
                        lettersSet: Math.floor(Math.random() * 200),
                        responses: Math.floor(Math.random() * 100),
                    });
                });
            })

            return items;
        } else {
            return tasks;
        }
    }
};

export default taskService;