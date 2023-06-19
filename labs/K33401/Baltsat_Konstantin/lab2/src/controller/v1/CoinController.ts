import { Request, Response } from "express"
import CoinService from "../../service/v1/CoinService"
import UserService from "../../service/v1/UserService"
import PortfolioService from "../../service/v1/PortfolioService"
import checkToken from "../../util/v1/checkToken"

class CoinController {
    private coinService: CoinService
    private userService: UserService
    private portfolioService: PortfolioService

    constructor() {
        this.coinService = new CoinService()
        this.userService = new UserService()
        this.portfolioService = new PortfolioService()
    }

    getAllCoins = async (request: Request, response: Response) => {
        try {
            const coins = await this.coinService.getAll()
            if (coins.length === 0) {
                return response.status(204).send(coins)
            }
            response.status(200).send(coins)
        } catch (error) {
            response.status(500).send({ error: error.message })
        }
    }

    getCoin = async (request: Request, response: Response) => {
        try {
            const { coinId } = request.query
            const coin = await this.coinService.get(String(coinId))
            response.status(200).send(coin)
        } catch (error) {
            response.status(500).send({ error: error.message })
        }
    }

    addCoin = async (request: Request, response: Response) => {
        try {
            const accessToken = request.headers.authorization.split(" ")[1]
            const decoded = checkToken(accessToken)
            if (decoded.isExpired) {
                return response.status(401).send("Access token was expired")
            }
            const userId = decoded.payload.sub.toString()
            const { body } = request
            const coinId = body.coin
            const user = await this.userService.get(userId)
            const coin = await this.coinService.get(coinId)
            body.user = userId
            const portfolioCoin = await this.portfolioService.get(user, coin)
            if (portfolioCoin) {
                return response.status(406).send("The coin has already been added")
            }
            const portfolio = await this.portfolioService.create(body)
            response.status(200).send(portfolio)
        } catch (error) {
            response.status(500).send({ error: error.message })
        }
    }

    createCoin = async (request: Request, response: Response) => {
        try {
            const accessToken = request.headers.authorization.split(" ")[1]
            const decoded = checkToken(accessToken)
            if (decoded.isExpired) {
                return response.status(401).send("Access token was expired")
            }
            const { body } = request
            const coin = await this.coinService.create(body)
            response.status(201).send(coin)
        } catch (error) {
            response.status(500).send({ error: error.message })
        }
    }

    updateCoin = async (request: Request, response: Response) => {
        try {
            const accessToken = request.headers.authorization.split(" ")[1]
            const decoded = checkToken(accessToken)
            if (decoded.isExpired) {
                return response.status(401).send("Access token was expired")
            }
            const { body } = request
            const { coinId } = request.query
            const coin = await this.coinService.update(String(coinId), body)
            response.status(200).send("Success")
        } catch (error) {
            response.status(500).send({ error: error.message })
        }
    }

    deleteCoin = async (request: Request, response: Response) => {
        try {
            const accessToken = request.headers.authorization.split(" ")[1]
            const decoded = checkToken(accessToken)
            if (decoded.isExpired) {
                return response.status(401).send("Access token was expired")
            }
            const { coinId } = request.query
            await this.coinService.delete(String(coinId))
            response.status(200).send("Success")
        } catch (error) {
            response.status(500).send({ error: error.message })
        }
    }
}

export default CoinController