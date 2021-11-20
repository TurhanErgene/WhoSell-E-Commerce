import Customer, { CustomerDocument } from '../models/Customer'
import { NotFoundError } from '../helpers/apiError'
import axios from 'axios'
import { localHost } from '../globals/index'

const findOrCreate = async (
  customerEmail: string,
  picture: string,
  givenName: string
) => {
  const customer = await Customer.findOne({ email: customerEmail })
  if (!customer) {
    const findCustomer = async () => {
      const createdCustomer: any = await axios.post(
        `${localHost}/api/v1/customers`,
        {
          firstName: givenName,
          image: picture,
          email: customerEmail,
        }
      )
      return createdCustomer
    }
    findCustomer()
  } else {
    return customer
  }
}

const findById = async (customerId: string): Promise<CustomerDocument> => {
  const foundCustomer = await Customer.findById(customerId)

  if (!foundCustomer) {
    throw new NotFoundError(`Customer ${customerId} not found`)
  }

  return foundCustomer
}

const findAll = async (): Promise<CustomerDocument[]> => {
  return Customer.find().sort({ name: 1, email: 1 })
}

const update = async (
  customerId: string,
  update: Partial<CustomerDocument>
): Promise<CustomerDocument> => {
  const foundCustomer = await Customer.findById(customerId, update, {
    new: true,
  })
  if (!foundCustomer) {
    throw new NotFoundError(`Customer ${customerId} not found`)
  }
  return foundCustomer
}

const deleteCustomer = async (
  customerId: string
): Promise<CustomerDocument | null> => {
  const foundCustomer = await Customer.findByIdAndDelete(customerId)

  if (!foundCustomer) {
    throw new NotFoundError(`Customer ${customerId} not found`)
  }

  return foundCustomer
}

// const create = async(
//   customer: CustomerDocument
// ): Promise<CustomerDocument> => {
//   return Customer.create(customer)
//   //return Customer.save() Ask, why not this

// }

const create = async (
  customer: CustomerDocument
): Promise<CustomerDocument> => {
  return customer.save()
}

export default {
  findOrCreate,
  create,
  findAll,
  findById,
  update,
  deleteCustomer,
}
