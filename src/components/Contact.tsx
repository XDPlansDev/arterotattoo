import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <Box
      id="contato"
      bg={useColorModeValue("gray.900", "gray.800")}
      color="white"
      py={{ base: 12, md: 24 }}
      px={4}
    >
      <Container maxW="6xl">
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          mb={10}
          textAlign="center"
        >
          Entre em Contato
        </Heading>

        <Flex
          direction={{ base: "column", md: "row" }}
          gap={10}
          align="flex-start"
        >
          {/* Formulário */}
          <Box flex="1" bg="gray.800" p={6} rounded="md" shadow="lg">
            <form onSubmit={(e) => e.preventDefault()}>
              <Stack spacing={4}>
                <Box>
                  <Text mb={1}>Nome</Text>
                  <Input type="text" placeholder="Seu nome" name="nome" />
                </Box>
                <Box>
                  <Text mb={1}>Email</Text>
                  <Input type="email" placeholder="seu@email.com" name="email" />
                </Box>
                <Box>
                  <Text mb={1}>Mensagem</Text>
                  <Textarea
                    placeholder="Digite sua mensagem..."
                    rows={6}
                    name="mensagem"
                  />
                </Box>
                <Button
                  colorScheme="teal"
                  size="lg"
                  mt={4}
                  w="full"
                  type="submit"
                >
                  Enviar
                </Button>
              </Stack>
            </form>
          </Box>

          {/* Informações de Contato */}
          <Box flex="1">
            <Stack spacing={6}>
              <ContactInfo
                icon={FaWhatsapp}
                label="WhatsApp"
                value="(11) 91234-5678"
                href="https://wa.me/5511912345678"
              />
              <ContactInfo
                icon={FaInstagram}
                label="Instagram"
                value="@rafaelartero"
                href="https://instagram.com/rafaelartero"
              />
              <ContactInfo
                icon={FaMapMarkerAlt}
                label="Estúdio"
                value="São Paulo - SP"
              />
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

function ContactInfo({
  icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <Flex gap={4} align="center">
      <Icon as={icon} boxSize={6} color="teal.300" />
      <Box>
        <Text fontWeight="bold">{label}</Text>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Text color="gray.300" _hover={{ textDecoration: "underline" }}>
              {value}
            </Text>
          </a>
        ) : (
          <Text color="gray.300">{value}</Text>
        )}
      </Box>
    </Flex>
  );
}
