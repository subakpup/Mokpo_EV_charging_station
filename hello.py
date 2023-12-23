from fastapi import FastAPI

# FastAPI 애플리케이션 생성
app = FastAPI()

# 루트 엔드포인트 ("/")에 대한 핸들러 함수 정의
@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

# 웹 서버 실행
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3000)