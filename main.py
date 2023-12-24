from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

# FastAPI 애플리케이션 생성
app = FastAPI()

# StaticFiles를 사용하여 /static 경로에 있는 파일 서빙
app.mount("/static", StaticFiles(directory="static"), name="static")

# 루트 엔드포인트 ("/")에 대한 핸들러 함수 정의
@app.get("/")
def index():
    return FileResponse("templates/index.html")

@app.get("/naver_map")
def index():
    return FileResponse("templates/naver_map.html")

@app.get("/reservation")
def index():
    return FileResponse("templates/reservation.html")

# 웹 서버 실행
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3000)