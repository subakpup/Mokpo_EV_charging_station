from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# /static 경로에 정적 파일 서빙
app.mount("/static", StaticFiles(directory="static"), name="static")

# 기존 엔드포인트 정의
@app.get("/")
def index():
    return FileResponse("templates/index.html")

@app.get("/map")
def map_endpoint():
    return FileResponse("templates/map.html")

@app.get("/reservation")
def reservation_endpoint():
    return FileResponse("templates/reservation.html")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3000)